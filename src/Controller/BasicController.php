<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Email;
use App\Form\Type\EmailsType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BasicController extends AbstractController
{
    #[Route('/form')]
    public function form(): Response
    {
        $user = new User();
        $email = new Email();
        $email2 = new Email();
        $email->setAddress('test@test.com');
        $email->addPurpose('');
        $email->addPurpose('');
        $email->addPurpose('');
        $email2->setAddress('test2@test.com');
        $email2->addPurpose('');
        $email2->addPurpose('');
        $email2->addPurpose('');
        $user->setName('user1');
        $user->addEmails($email);
        $user->addEmails($email2);


        $form = $this->createFormBuilder($user)
            ->add('name', TextType::class)
            ->add('emails', CollectionType::class, [
                'entry_type' => EmailsType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'prototype' => true,
                'attr' => [
                    'class' => 'emails'
                ],
                'by_reference' => false
            ])
            ->add('save', SubmitType::class, ['label' => 'Create User'])
            ->getForm();

        return $this->render('base.html.twig', ['form' => $form]);
    }
}
