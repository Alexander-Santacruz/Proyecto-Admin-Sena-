productos = [
    {"nombre": "Camisa", "precio": 45000},
    {"nombre": "Pantalón", "precio": 89000},
    {"nombre": "Media", "precio": 8000}
]

baratos = [p["nombre"] for p in productos if p["precio"] < 50000]
print(baratos)
