<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckIdentityMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (auth()->user()->identity === 1) {
            return $next($request);
        }

        return redirect('/', 302);
    }
}
