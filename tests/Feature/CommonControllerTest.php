<?php

namespace Tests\Feature;

use Illuminate\Session\Store;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Str;
use Mews\Captcha\Facades\Captcha;
use Tests\TestCase;

class CommonControllerTest extends TestCase
{
    public function testBasic()
    {
//        $rpush = Redis::rpush('test', []);
//        $rpush = Redis::rpush('test', 2);
//        $rpush = Redis::rpush('test', 3);
//        dump(Redis::llen('test'));
//        dd(Redis::rpop('test'));
//        \Storage::put('l_3.json', json_encode([]));
//        dd($random);
//        $response->assertStatus(200);
    }
}
