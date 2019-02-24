import {
    trigger,
    animate,
    transition,
    style,
    query,
    state
} from '@angular/animations';

export const routerAnimation = trigger('routerAnimation', [
    transition('* => *', [
        query(
            ':enter',
            [style({ opacity: 0 })],
            { optional: true }
        ),
        query(
            ':leave',
            [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
            { optional: true }
        )
    ])
]);

export const widthAnimation = trigger('widthAnimation', [
    state('full', style({
        width: '100%'
    })),
    state('middle', style({
        width: '50%'
    })),
    transition('full => middle', animate('400ms ease-in-out')),
    transition('middle => full', animate('400ms ease-in-out'))
]);