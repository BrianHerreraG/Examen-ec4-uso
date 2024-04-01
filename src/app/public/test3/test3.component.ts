import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PreguntasService } from 'src/app/shared/Services/preguntas.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component {
  @ViewChild('name') nameKey!: ElementRef;

  public questionList: any[] = [];

  nameForm = this.fb.group({
    name: ['', [Validators.required]],
  });

  constructor(public questionService: PreguntasService, private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.questionService.getQuestionFire3c().subscribe(res => {
      this.questionList = res;
      if (this.questionList.length === 0) {
        this.showNoQuestionsAlert();
      }
    });
  }

  
  startQuiz(){
    if (this.nameForm.valid) {
      localStorage.setItem("name",this.nameKey.nativeElement.value);
      this.router.navigate(['principal/seleccionar/test3/examen3']);
    }
    //localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

  showNoQuestionsAlert() {
    Swal.fire({
      icon: 'error',
      title: 'No hay preguntas disponibles',
      text: 'Lo sentimos, no hay preguntas disponibles en este momento.',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/principal']); // Redirigir a la página principal
      }
    });
  }

}
