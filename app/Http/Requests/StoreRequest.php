<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|max:255|string',
            'description' => 'max:255',
            'vendor_id' => 'required|exists:users,id',
            'state' => 'required|max:255|string',
            'LGA' => 'required|max:255|string',
            'published_at' => 'required|in:publish,draft|string',
        ];
    }
}
