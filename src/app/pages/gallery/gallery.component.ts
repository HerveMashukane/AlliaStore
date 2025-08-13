import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  products: any = [
    {
      id: 1, image: '/assets/images/products/peignechauffant.jpeg', alt: 'product image', title: 'Peigne chauffant', price: '$1.400', viewBtn: 'Voir', commandBtn: 'commander'},
    {id: 2, image: '/assets/images/products/Eau de parfum YARA et ASAD.jpeg', alt: 'product image', title: 'Eau de parfum YARA et ASAD', price: '$2.500', viewBtn: 'Voir', commandBtn: 'commander'},
    {id: 3, image: '/assets/images/products/Gourde.jpeg', title: 'Gourde', price: '$500', viewBtn: 'Voir', commandBtn: 'commander'},
    {id: 4, image: '/assets/images/products/Gourde isotherme.jpeg', alt: 'product image', title: 'Gourde isotherme', price: '$600', viewBtn: 'Voir', commandBtn: 'commander'},
    {id: 5, image: '/assets/images/products/Lisseur à cheveux.jpeg', alt: 'product image', title: 'Lisseur à cheveux', price: '$2.500', viewBtn: 'Voir', commandBtn: 'commander'},
    {id: 6, image: '/assets/images/products/Pinceaux de maquillage.jpeg', alt: 'product image', title: 'Pinceaux de maquillage', price: '$500', viewBtn: 'Voir', commandBtn: 'commander'},
    {id: 7, image: '/assets/images/products/Sandales mixte en cuir.jpeg', alt: 'product image', title: 'Sandales mixte en cuir', price: '$400', viewBtn: 'Voir', commandBtn: 'commander'},
    {id: 8, image: '/assets/images/products/Bijous en or.jpeg', alt: 'product image', title: 'Bijous en or', price: '$2.500', viewBtn: 'Voir', commandBtn: 'commander'},
  ]
  faqs: any = [
    { id: 1, 
      question: 'Comment puis-je vous envoyer mon panier?', 
      answer: 'Vous pouvez nous envoyer un lien vers votre panier ou une capture decran via nos canaux de communication, nous vous guiderons tout au long du processus',
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

  // FAQ expansion
  expandedQuestion: number | null = null;

  toggleExpanded(index: number) {
    this.expandedQuestion = this.expandedQuestion === index ? null : index;
  }
}