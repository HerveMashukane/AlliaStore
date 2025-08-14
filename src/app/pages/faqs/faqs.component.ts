import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
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
      answer: 'Nous livrons partout en RDC',
    },
    {id: 4, 
      question: 'Quand pourriez-vous commencer des livraisons ici chez nous?',
      answer: 'Envoyez-nous votre adresse via nos canaux de communication pour une reponse trop claire',
    },
  ]

  // FAQ Expansion
  expandedQuestion: number | null = null;

  toggleExpanded(index: number) {
    this.expandedQuestion = this.expandedQuestion === index ? null : index;
  }
}
