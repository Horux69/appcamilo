import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  myName: string = ''
  myPassword: string = ''

  formularioLogin: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastController: ToastController) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
    
  }

  registro(){
    this.router.navigate(['../register'])
  }

  enviar(){

    var f = this.formularioLogin.value;
    
    if(this.myName.length > 0 && this.myPassword.length > 0){
      
    }
    else{
      if (this.myName.length <= 0 && this.myPassword.length <= 0){
        this.presentToast()
      }
      else if(this.myName.length <= 0) {
        this.presentToastName()
      }
      else if (this.myPassword.length <= 0) {
        this.presentToastPass()
      }
    }
     
    const usuarioString = localStorage.getItem('usuario');
    const usuario = usuarioString ? JSON.parse(usuarioString) : null;

    if (usuario.nombre == f.nombre && usuario.password == f.password) {
      localStorage.setItem('ingresado','true');
      this.router.navigate(['../menu/inicio']);
    }
    else {
      this.presentToastInvalid()
    }


  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Debe digitar el nombre y la contraseña.',
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
      message: 'Debe digitar el Password.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastInvalid() {
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña incorrectos.',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
