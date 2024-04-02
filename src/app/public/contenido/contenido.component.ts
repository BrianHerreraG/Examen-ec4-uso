import { Component } from '@angular/core';
import { MultimediaService } from 'src/app/shared/Services/multimedia.service';
import { Observable } from 'rxjs';
import Multimedia from 'src/app/shared/interfaces/pregunta.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent {
  videos4: Observable<Multimedia[]>;
  videos3: Observable<Multimedia[]>;

  constructor(private service: MultimediaService, private sanitizer: DomSanitizer) {
    this.videos4 = service.getMultimediaFire4c();
    this.videos3 = service.getMultimediaFire3c();
  }

  // Función para extraer el ID del video de la URL de YouTube
extractVideoId(url: string): string {
  // Patrones de expresión regular para extraer el ID del video
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/
  ];

  // Intenta encontrar el ID del video en la URL
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      // Devuelve el ID del video
      return match[1];
    }
  }

  // Si no se encuentra ningún ID válido, devuelve una cadena vacía
  return '';
}

// Función para crear una URL segura para el iframe de YouTube
createYoutubeUrl(url: string): SafeResourceUrl {
  // Extrae el ID del video
  const videoId = this.extractVideoId(url);

  // Construye la URL del iframe
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

  // Retorna la URL segura usando DomSanitizer
  return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);
}

}
