<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminRequest extends FormRequest
{
    public function rules(): array
    {
        return [
//            'email'     => 'required|email|unique:users',
            'name'      => 'required|max:120',
            'identity'  => 'required|min:1|max:3',
            'is_active' => 'required|min:1|max:3'
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
