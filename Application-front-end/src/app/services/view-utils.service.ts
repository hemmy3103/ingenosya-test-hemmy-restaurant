import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewUtilsService {

  constructor(public toastController: ToastController,
    public alertController: AlertController) { }

  async presentToast(message: string, status: boolean) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: (status)?"success":"danger"
    });
    toast.present();
  }

  async presentAlert(params: any) {
    window.alert(params.message);
  }
}
