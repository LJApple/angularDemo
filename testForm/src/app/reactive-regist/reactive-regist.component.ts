import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,FormBuilder,AbstractControl,Validators} from "@angular/forms";
import { equalValidator, mobileVlidator,mobileAsyncVlidator} from "../validator/validators";
@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  formModel:FormGroup;
  constructor(fb:FormBuilder) { 
    this.formModel = fb.group({
      // ["","",""]  第一个元素表单的初始值，表单的校验方法，异步的校验方法
      username:['', [Validators.required,Validators.minLength(6)]],
      mobile:['',mobileVlidator,mobileAsyncVlidator],
      passwordGroup:fb.group({
        password:['',Validators.minLength(6)],
        pconfirm:['']
      },{validator:equalValidator})
    })
    // this.formModel = new FormGroup({
    //   username:new FormControl(),
    //   mobile:new FormControl(),
      
    //   passwordGroup:new FormGroup({
    //     password:new FormControl(),
    //     pconfirm:new FormControl()
    //   })
      
    // })
  }
  onSubmit() {
    // let isValid:boolean = this.formModel.get('username').valid;

    // let errors:any = this.formModel.get('username').errors;
    // console.log(JSON.stringify(errors));
    // console.log(isValid);
    // console.log(this.formModel.value)
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
  ngOnInit() {
  }

}
