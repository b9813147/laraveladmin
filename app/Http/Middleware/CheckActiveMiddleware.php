<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckActiveMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (!auth()->user()->is_active) {
            auth()->logout();
            abort(403);
        }

        return $next($request);
    }
}
