<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email'    => 'required|email',
            'captcha'  => 'required|captcha',
            'password' => 'required'
        ];
    }


    public function messages()
    {
        return [
            'email.required'    => 'email不可空白',
            'password.required' => 'password 不可空白',
            'email.email'       => 'email不正確',
            'captcha.required'  => '請輸入驗證碼',
            'captcha.captcha'   => '驗證碼不正確',
        ];
    }
}
