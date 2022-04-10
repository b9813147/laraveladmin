@extends('layouts.app')

@section('content')
    <reset-password-component :token=`{{ $token }}` :email=`{{ $email }}`></reset-password-component>
@endsection
