<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminRequest extends FormRequest
{
    public function rules()
    {
        switch ($this->method()) {
            case  'POST':
                return [
                    'email'     => 'required|email|unique:users',
                    'name'      => 'required|max:120',
                    'identity'  => 'required|min:1|max:3',
                    'is_active' => 'required|min:1|max:3'
                ];
            case 'PUT':
            case 'PATCH':
                return [
                    'email'     => "required|unique:users,email, $this->id",
                    'name'      => 'required|max:120',
                    'identity'  => 'required|min:1|max:3',
                    'is_active' => 'required|min:1|max:3'
                ];
            default:
                break;
        }
    }

    public function authorize(): bool
    {
        return true;
    }
}
