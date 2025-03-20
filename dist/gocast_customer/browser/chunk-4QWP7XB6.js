import{b,c as u,d as P,e as _,g as M,h as S,i as F,k as E,m as O}from"./chunk-F6MGHGDC.js";import{a as C}from"./chunk-CZVY3TGQ.js";import{C as l,F as m,H as t,I as o,J as d,L as h,M as p,N as i,P as g,aa as w,ba as v,fa as x,v as a,x as c,y as f}from"./chunk-G64Z5KRI.js";import"./chunk-2NFLSA4Y.js";function I(n,r){n&1&&(t(0,"span",21),i(1," La contrase\xF1a debe tener al menos 8 caracteres "),o())}function N(n,r){n&1&&(t(0,"span",21),i(1," Las contrase\xF1as no coinciden "),o())}function R(n,r){if(n&1&&(t(0,"div",22),i(1),o()),n&2){let e=p();a(),g(" ",e.errorMessage," ")}}function G(n,r){if(n&1&&(t(0,"div",23),i(1),o()),n&2){let e=p();a(),g(" ",e.successMessage," ")}}var y=class n{constructor(r,e,s){this.fb=r;this.router=e;this.authService=s;this.resetPasswordForm=this.fb.group({password:["",[u.required,u.minLength(8)]],confirmPassword:["",[u.required]]},{validator:this.passwordMatchValidator})}resetPasswordForm;isLoading=!1;errorMessage="";successMessage="";passwordMatchValidator(r){return r.get("password")?.value===r.get("confirmPassword")?.value?null:{mismatch:!0}}showError(r){let e=this.resetPasswordForm.get(r);return e?r==="confirmPassword"?(e.dirty||e.touched)&&(e.invalid||this.resetPasswordForm.hasError("mismatch")):e.invalid&&(e.dirty||e.touched):!1}onSubmit(){if(this.resetPasswordForm.valid&&!this.isLoading){this.isLoading=!0,this.errorMessage="",this.successMessage="";let r=this.resetPasswordForm.get("password")?.value;setTimeout(()=>{this.successMessage="Contrase\xF1a actualizada exitosamente",setTimeout(()=>{this.router.navigate(["/dashboard"])},3e3)},1500)}}static \u0275fac=function(e){return new(e||n)(c(E),c(x),c(C))};static \u0275cmp=f({type:n,selectors:[["app-reset-password"]],decls:33,vars:6,consts:[[1,"login-page"],[1,"header"],[1,"header-content"],["src","assets/images/logob.png","alt","GoCast Logo",1,"header-logo"],[1,"main-content"],[1,"logo-container"],["src","assets/images/logow.png","alt","GoCast Logo",1,"logo"],[1,"login-form-container"],[1,"instruction-text"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","password"],[1,"input-container"],["type","password","id","password","formControlName","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"],[1,"info-icon"],["class","error-text",4,"ngIf"],["for","confirmPassword"],["type","password","id","confirmPassword","formControlName","confirmPassword","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"],["type","submit",3,"disabled"],["class","error-message",4,"ngIf"],["class","success-message",4,"ngIf"],[1,"error-text"],[1,"error-message"],[1,"success-message"]],template:function(e,s){e&1&&(t(0,"div",0)(1,"header",1)(2,"div",2),d(3,"img",3),o()(),t(4,"div",4)(5,"div",5),d(6,"img",6),o(),t(7,"div",7)(8,"h2"),i(9,"Establecer Nueva Contrase\xF1a"),o(),t(10,"p",8),i(11,"Ingresa y confirma tu nueva contrase\xF1a."),o(),t(12,"form",9),h("ngSubmit",function(){return s.onSubmit()}),t(13,"div",10)(14,"label",11),i(15,"Nueva Contrase\xF1a"),o(),t(16,"div",12),d(17,"input",13),t(18,"span",14),i(19,"i"),o()(),l(20,I,2,0,"span",15),o(),t(21,"div",10)(22,"label",16),i(23,"Confirmar Contrase\xF1a"),o(),t(24,"div",12),d(25,"input",17),t(26,"span",14),i(27,"i"),o()(),l(28,N,2,0,"span",15),o(),t(29,"button",18),i(30," Actualizar Contrase\xF1a "),o(),l(31,R,2,1,"div",19)(32,G,2,1,"div",20),o()()()()),e&2&&(a(12),m("formGroup",s.resetPasswordForm),a(8),m("ngIf",s.showError("password")),a(8),m("ngIf",s.showError("confirmPassword")),a(),m("disabled",s.resetPasswordForm.invalid||s.isLoading),a(2),m("ngIf",s.errorMessage),a(),m("ngIf",s.successMessage))},dependencies:[v,w,O,M,b,P,_,S,F],styles:[".login-page[_ngcontent-%COMP%]{min-height:100vh;width:100vw;display:flex;flex-direction:column;background-color:#3f51b5}.header[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 2px 4px #0000001a;padding:1rem 0;width:100%}.header-content[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:0 2rem}.header-logo[_ngcontent-%COMP%]{height:40px}.main-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;padding:2rem}.logo-container[_ngcontent-%COMP%]{margin-bottom:2rem}.logo[_ngcontent-%COMP%]{height:60px}.login-form-container[_ngcontent-%COMP%]{background-color:#fff;padding:2rem;border-radius:8px;width:100%;max-width:400px;box-shadow:0 4px 6px #0000001a}h2[_ngcontent-%COMP%]{color:#333;text-align:center;margin-bottom:1rem}.instruction-text[_ngcontent-%COMP%]{color:#666;text-align:center;margin-bottom:2rem;font-size:.9rem}.form-group[_ngcontent-%COMP%]{margin-bottom:1.5rem}label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;color:#333}.input-container[_ngcontent-%COMP%]{position:relative}input[_ngcontent-%COMP%]{width:100%;padding:.75rem;border:1px solid #ddd;border-radius:4px;font-size:1rem}.info-icon[_ngcontent-%COMP%]{position:absolute;right:10px;top:50%;transform:translateY(-50%);color:#999;cursor:help}button[_ngcontent-%COMP%]{width:100%;padding:1rem;background-color:#3f51b5;color:#fff;border:none;border-radius:4px;font-size:1rem;cursor:pointer;transition:background-color .3s}button[_ngcontent-%COMP%]:disabled{background-color:#999;cursor:not-allowed}.error-text[_ngcontent-%COMP%]{color:#dc3545;font-size:.8rem;margin-top:.25rem}.error-message[_ngcontent-%COMP%]{color:#dc3545;text-align:center;margin-top:1rem}.success-message[_ngcontent-%COMP%]{color:#28a745;text-align:center;margin-top:1rem}"]})};export{y as ResetPasswordComponent};
