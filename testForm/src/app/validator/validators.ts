
import { FormGroup,FormControl} from "@angular/forms";

export function mobileVlidator(control:FormControl):any {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
    let valid = myreg.test(control.value);
    console.log(valid);
    return valid ? null : {mobile:true};
  }
  export function equalValidator(group:FormGroup):any {
    let password:FormControl = group.get('password') as FormControl;
    let pconfirm:FormControl = group.get('pconfirm') as FormControl;
    let valid:boolean = (password.value === pconfirm.value);
    console.log(valid);
    return valid ? null : {equal:{descxxx:"密码和确认密码不匹配"}}
  }