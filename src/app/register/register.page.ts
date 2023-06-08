import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  myName: string = ''
  myPassword: string = ''
  myConfirmPass: string = ''

  formularioRegistro: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastController: ToastController) {

    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmPassword': new FormControl("",Validators.required)
    })

   }

   guardar(){

    var f = this.formularioRegistro.value;

    if(this.myName.length > 0 && this.myPassword.length > 0 && this.myConfirmPass.length > 0){

    }
    else{

      if (this.myName === "" &&  this.myPassword !== "" && this.myConfirmPass !== ""){
        this.presentToastName()
      }
      else if (this.myPassword === "" && this.myName !== "" && this.myConfirmPass !== ""){
        this.presentToastPass()
      }
      else if (this.myConfirmPass ==="" && this.myName !== "" && this.myPassword !== ""){
        this.presentToastConfirm()
      }
      else if (this.myName === "" || this.myPassword === "" || this.myConfirmPass === ""){
        this.presentToast()
      }

    }

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));

    localStorage.setItem('ingresado','true');
      this.router.navigate(['../menu/inicio']);
   }

   async presentToast() {
    const toast = await this.toastController.create({
      message: 'Debe digitar todos los campos.',
      duration: 2000
    });
    toast.present();
  }
  async presentToastName() {
    const toast = await this.toastController.create({
      message: 'Debe digitar el nombre.',
      duration: 2000
    });
    toast.present();
  }
  async presentToastPass() {
    const toast = await this.toastController.create({
      message: 'Debe digitar la contraseña.',
      duration: 2000
    });
    toast.present();
  }
  async presentToastConfirm() {
    const toast = await this.toastController.create({
      message: 'Debe confirmar la contraseña.',
      duration: 2000
    });
    toast.present();
  }

  

  ngOnInit() {
  }

}
