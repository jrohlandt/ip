<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NodeCreate extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|string|max:64',
            'parent_id' => 'required|integer',
            'url' => 'string|nullable|max:1000',
            'interactor' => 'required',
        ];
    }
}
