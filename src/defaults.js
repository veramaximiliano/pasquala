const defaults = {
    languages: ['es', 'en'],
    language: 'es',
    theme: 'light',
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l','m', 'n', 'ñ','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    
    'es': {
        words: {
            'pain': 'Dolor',
            'nurse': 'Enfermero',
            'doctor': 'Medico',
            'air': 'Aire',
            'cold': 'Frio',
            'hot': 'Calor',
            'diaper': 'Pañal',
            'cover': 'Manta',
            'pillow': 'almohada'
        },

        ui: {
            'help': 'Ayuda',
            'new word': 'Nueva palabra',
            'save': 'Guardar',
            'cancel': 'Cancelar',
            'first letter question':'¿Tu primera letra está aquí?',
            'next letter question':'¿Tu próxima letra está aquí?',
            'yes': 'Si',
            'no': 'No',
            'reset': 'Restablecer',
            'your word': 'Tu palabra',
            'back': 'Volver'  
        }        
    },

    'en': {
        words: {
                'pain': 'Pain',
                'nurse': 'Nurse',
                'doctor': 'Doctor',
                'air': 'Air',
                'cold': 'Cold',
                'hot': 'Hot',
                'diaper': 'Diaper',
                'cover': 'Cover',
                'pillow': 'Pillow'
        }, 

        ui: {
            'help': 'Help',
            'new word': 'New word',
            'save': 'Save',
            'cancel': 'Cancel',
            'first letter question':'Is you first letter on this list?',
            'next letter question':'Is you next letter on this list?',
            'yes': 'Yes',
            'no': 'No',
            'reset': 'Reset',
            'your word': 'Your word',
            'back': 'Back'  
        }        
    }
}

export default defaults