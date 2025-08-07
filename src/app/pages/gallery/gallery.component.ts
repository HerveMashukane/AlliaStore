import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  isExpanded: boolean = false;
  products: any = [
    {id: 1, image: '/assets/images/logo.jpeg', alt: 'product image', title: 'Bijoux elegant en or', price: '$1,400', textBtn: 'Voir'},
    {id: 2, image: '/assets/images/allia.jpeg', alt: 'product image', title: 'Chainette en or', price: '$2.500', textBtn: 'Voir'},
    {id: 3, image: '/assets/images/logo.jpeg', alt: 'product image', title: 'Bracelets', price: '$500', textBtn: 'Voir'},
    {id: 4, image: '/assets/images/allia.jpeg', alt: 'product image', title: 'Sac a main', price: '$145', textBtn: 'Voir'},
    {id: 5, image: '/assets/images/logo.jpeg', alt: 'product image', title: 'Perles', price: '$200', textBtn: 'Voir'},
    {id: 6, image: '/assets/images/allia.jpeg', alt: 'product image', title: 'Sac au dos', price: '$150', textBtn: 'Voir'},
  ]

  faqs: any = [
    { id: 1, 
      question: 'Comment puis-je vous envoyer mon panier?', 
      answer: 'Vous pouvez nous envoyer un lien vers votre panier ou une capture decran via nos canaux de communication, nous vous guiderons tout au long du processus',
      isExpanded: false,
    },
    {id: 2, 
      question: 'Quels sont vos frais de service?', 
      answer: 'On applique aucun frais de service',
    },
    {id: 3, 
      question: 'Vers quels pays livrez-vous?', 
      answer: 'nous livrons partout en RDC',
    },
    {id: 3, 
      question: 'Quand pourriez-vous commencer des livraisons ici chez nous?', 
      answer: 'Envoyez-nous votre adresse via nos canaux de communication pour une reponse trop claire',
    },
  ]

  toggleExpanded() {
    
  }
}