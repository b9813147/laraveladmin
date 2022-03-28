@extends('layouts.app')

@section('content')
    <user-component :users="{{$users}}"></user-component>
@endsection
