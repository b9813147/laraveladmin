@component('mail::message')
# 您好！

您收到這封電子郵件是因為我們收到了您帳戶的密碼重置請求。
@component('mail::button', ['url' => $url])
    密碼重置
@endcomponent

{{-- @component('mail::panel')--}}
{{--     This is a panel--}}
{{-- @endcomponent--}}

{{-- ## Table component:--}}

{{-- @component('mail::table')--}}
{{--     | Laravel       | Table         | Example  |--}}
{{--     | ------------- |:-------------:| --------:|--}}
{{--     | Col 2 is      | Centered      | $10      |--}}
{{--     | Col 3 is      | Right-Aligned | $20      |--}}
{{-- @endcomponent--}}

{{--    @component('mail::promotion')--}}
{{--        This is a promotion component--}}
{{--    @endcomponent--}}

{{--    @component('mail::subcopy')--}}
{{--        This is a subcopy component--}}
{{--    @endcomponent--}}


Thanks,<br>
{{ config('app.name') }}
@endcomponent
