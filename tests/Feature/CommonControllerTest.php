<?php

namespace Tests\Feature;

use Gregwar\Captcha\ImageFileHandler;
use Illuminate\Support\Facades\Http;
use Mews\Captcha\Facades\Captcha;
use Tests\TestCase;

class CommonControllerTest extends TestCase
{
    public function testBasic()
    {
        $response = $this->get('ap/image_code');
        $response->assertStatus(200);
    }
}
