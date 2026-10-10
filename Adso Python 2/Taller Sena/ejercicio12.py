# 12. Lista de correos válidos
correos = ["ana@gmail.com", "luis", "carlos@hotmail.com", "sena"]

correos_validos = [c for c in correos if "@" in c]
print("Lista completa de correos:", correos)
print("Correos válidos (@):", correos_validos)
