#include <stdio.h>
#include <stdlib.h>
#define TAMANIO 5
#include "ClaseOcho.h"
#include <string.h>

int main()
{
    char apellido[TAMANIO][20]={"lopez", "alvarez","Zapata","Perez", "Albornoz"};
    int notaUno[5]={10,4,2,9,8};
    int notaDos[5]={1,8,2,8,10};
    int i;
    float promedio [TAMANIO];

    for (i=0;i<TAMANIO;i++)
    {
        promedio[i]=sacarPromedio(notaUno[i],notaDos[i]);
        printf("\n notaUno : %d",notaUno[i]);
        printf("\n notaDos : %d",notaDos[i]);
        printf("\n promedio : %f", promedio[i]);
        printf("\n apellido : %s", apellido[i]);

    }
    return 0;

}

