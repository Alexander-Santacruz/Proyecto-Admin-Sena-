# 10. Filtrar productos en oferta
productos = [
    {"nombre": "Camisa", "precio": 45000},
    {"nombre": "Pantalón", "precio": 89000},
    {"nombre": "Media", "precio": 8000}
]

productos_baratos = [p["nombre"] for p in productos if p["precio"] < 50000]
print("Productos que cuestan menos de 50.000:", productos_baratos)
