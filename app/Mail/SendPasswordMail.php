<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use function Symfony\Component\Translation\t;

class SendPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $token;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($token)
    {
        $this->token = $token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('This is Testing Mail')
            ->markdown('auth.passwords.passwordEmail', ['token' => $this->token]);
    }
}
