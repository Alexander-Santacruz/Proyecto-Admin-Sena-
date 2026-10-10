def clasificar_medalla(nota):
    if nota > 4.5:
        return "Oro"
    elif nota > 4.0:
        return "Plata"
    elif nota > 3.8:
        return "Bronce"
    else:
        return "Sin medalla"

print(clasificar_medalla(4.8))
print(clasificar_medalla(4.2))
print(clasificar_medalla(3.9))
print(clasificar_medalla(3.5))
