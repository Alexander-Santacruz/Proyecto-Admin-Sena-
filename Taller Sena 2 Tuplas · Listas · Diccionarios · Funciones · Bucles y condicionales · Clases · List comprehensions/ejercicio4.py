precios = [45000, 120000, 8000, 300000]
for precio in precios:
    if precio > 100000:
        precio_final = precio * 0.85
        print(precio_final)
    else:
        print(precio)
