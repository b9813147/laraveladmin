<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="user" content="{{ Auth::user() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <v-app id="inspire">
        @if(auth()->check())
            <v-navigation-drawer class="blue lighten-5" mini-variant-width="70" width="250" light v-model="drawer" app>
                <v-list dense>
                    @include('layouts.sidebar')
                </v-list>
            </v-navigation-drawer>
            <v-app-bar app elevation=1>
                @include('layouts.topBar')
            </v-app-bar>
        @endif
        <v-main>
            <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col col-12>
                        @yield('content')
                    </v-col>
                </v-row>

            </v-container>
        </v-main>
        <v-footer app>
            <span>&copy; 2023</span>
        </v-footer>
    </v-app>
</div>
@stack('beforeScripts')
<script src="{{ mix('js/app.js') }}"></script>
@stack('afterScripts')
</body>
</html>
