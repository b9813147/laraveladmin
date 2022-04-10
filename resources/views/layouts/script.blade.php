@php
    $config = [
    'appName'=>config('app.name'),
    'locale' =>$locale = app()->getLocale(),
    'userInfo'=>auth()->user()??'',
    ];
@endphp
<script>window.config = {!! json_encode($config); !!};</script>
<script src="{{ mix('js/app.js') }}"></script>
