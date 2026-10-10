import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

def create_presentation_pro():
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # Palette: Pro Tech (Midnight Navy, Electric Cyan, Accent Amber, Crisp White)
    c_navy = RGBColor(15, 23, 42)       # Slate 900
    c_cyan = RGBColor(6, 182, 212)      # Cyan 500
    c_accent = RGBColor(245, 158, 11)   # Amber 500
    c_white = RGBColor(255, 255, 255)
    c_gray = RGBColor(148, 163, 184)    # Slate 400
    c_dark_card = RGBColor(30, 41, 59)  # Slate 800
    c_card_border = RGBColor(51, 65, 85)# Slate 700

    def add_header(slide, title_text, subtitle_text=""):
        # Top dark bar
        bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, Inches(1.2))
        bar.fill.solid()
        bar.fill.fore_color.rgb = c_navy
        bar.line.fill.background()

        # Bottom accent glowing line
        line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, Inches(1.2), prs.slide_width, Inches(0.06))
        line.fill.solid()
        line.fill.fore_color.rgb = c_cyan
        line.line.fill.background()

        tb = slide.shapes.add_textbox(Inches(0.8), Inches(0.2), Inches(11.7), Inches(0.9))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
        
        p = tf.paragraphs[0]
        p.text = title_text
        p.font.name = "Arial"
        p.font.size = Pt(24)
        p.font.bold = True
        p.font.color.rgb = c_white

        if subtitle_text:
            p2 = tf.add_paragraph()
            p2.text = subtitle_text
            p2.font.name = "Arial"
            p2.font.size = Pt(13)
            p2.font.color.rgb = c_cyan
            p2.space_before = Pt(2)

    # ==================== SLIDE 1: PORTADA PRO ====================
    slide1 = prs.slides.add_slide(blank_layout)
    bg1 = slide1.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
    bg1.fill.solid()
    bg1.fill.fore_color.rgb = c_navy
    bg1.line.fill.background()

    # Decorative tech card frame
    dec1 = slide1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(0.8), Inches(11.733), Inches(5.9))
    dec1.fill.solid()
    dec1.fill.fore_color.rgb = c_dark_card
    dec1.line.color.rgb = c_cyan
    dec1.line.width = Pt(1.5)

    tb1 = slide1.shapes.add_textbox(Inches(1.5), Inches(1.8), Inches(10.3), Inches(4.5))
    tf1 = tb1.text_frame
    tf1.word_wrap = True

    p = tf1.paragraphs[0]
    p.text = "Calidad del Software & GitHub Copilot"
    p.font.name = "Arial"
    p.font.size = Pt(36)
    p.font.bold = True
    p.font.color.rgb = c_white

    p_sub = tf1.add_paragraph()
    p_sub.text = "Ingeniería de Software Avanzada e Inteligencia Artificial en el Desarrollo Moderno"
    p_sub.font.name = "Arial"
    p_sub.font.size = Pt(16)
    p_sub.font.color.rgb = c_cyan
    p_sub.space_before = Pt(10)

    p_info = tf1.add_paragraph()
    p_info.text = "• Programa: ADSO (SENA) | Ficha: 3223899 | Centro de Comercio y Servicios\n• Equipo: Yedinson Ortiz Pino, William Oswaldo Luna, Alejandro Euscategui\n• Fecha: 19 de agosto de 2026"
    p_info.font.name = "Arial"
    p_info.font.size = Pt(13)
    p_info.font.color.rgb = c_gray
    p_info.space_before = Pt(24)

    # ==================== SLIDE 2: QUÉ ES SOFTWARE ====================
    slide2 = prs.slides.add_slide(blank_layout)
    add_header(slide2, "1. ¿Qué es Software?", "Anatomía estructural de un sistema informático")

    cards_s2 = [
        ("Código Fuente & Ejecutables", "Las instrucciones lógicas escritas por desarrolladores y compiladas para que la máquina las ejecute de manera eficiente."),
        ("Bases de Datos & Configuración", "Estructuras de almacenamiento persistente y archivos de entorno que permiten la personalización y gestión de la información."),
        ("Documentación & Manuales", "Guías técnicas y de usuario que garantizan la mantenibilidad, transferencia de conocimiento y operabilidad del sistema a largo plazo.")
    ]

    for i, (title, desc) in enumerate(cards_s2):
        left = Inches(0.8 + i * 4.0)
        c = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(2.0), Inches(3.7), Inches(4.5))
        c.fill.solid()
        c.fill.fore_color.rgb = c_dark_card
        c.line.color.rgb = c_card_border
        tf = c.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = Inches(0.4)

        p = tf.paragraphs[0]
        p.text = title
        p.font.name = "Arial"
        p.font.size = Pt(18)
        p.font.bold = True
        p.font.color.rgb = c_cyan

        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.name = "Arial"
        p2.font.size = Pt(13)
        p2.font.color.rgb = c_gray
        p2.space_before = Pt(14)

    # ==================== SLIDE 3: CALIDAD DE SOFTWARE ====================
    slide3 = prs.slides.add_slide(blank_layout)
    add_header(slide3, "2. ¿Qué es Buena Calidad de Software?", "Más allá de cumplir requerimientos: Pilares de excelencia técnica")

    pillars = [
        ("Seguridad Robusta", "Protección contra brechas de inyección SQL, validación estricta de entradas y cifrado de datos sensibles."),
        ("Eficiencia & Rendimiento", "Optimización del uso de memoria RAM y procesador, evitando fugas de memoria (Memory Leaks)."),
        ("Mantenibilidad", "Arquitectura limpia y código desacoplado que permite escalar y actualizar sin romper módulos existentes."),
        ("Usabilidad y Estándares", "Interfaces intuitivas, experiencia de usuario fluida y estricto cumplimiento de normas técnicas.")
    ]

    for i, (title, desc) in enumerate(pillars):
        col = i % 2
        row = i // 2
        left = Inches(0.8 + col * 5.9)
        top = Inches(1.8 + row * 2.5)

        c = slide3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, Inches(5.6), Inches(2.2))
        c.fill.solid()
        c.fill.fore_color.rgb = c_dark_card
        c.line.color.rgb = c_card_border
        tf = c.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = Inches(0.3)

        p = tf.paragraphs[0]
        p.text = title
        p.font.name = "Arial"
        p.font.size = Pt(16)
        p.font.bold = True
        p.font.color.rgb = c_accent

        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.name = "Arial"
        p2.font.size = Pt(13)
        p2.font.color.rgb = c_gray
        p2.space_before = Pt(6)

    # ==================== SLIDE 4: EL MITO DE FUNCIONAR ====================
    slide4 = prs.slides.add_slide(blank_layout)
    add_header(slide4, "3. El Mito: 'Si funciona, es de calidad'", "Por qué un programa funcional puede ser una bomba de tiempo técnica")

    box_m = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(5.6), Inches(5.0))
    box_m.fill.solid()
    box_m.fill.fore_color.rgb = c_dark_card
    box_m.line.color.rgb = c_card_border
    tf_m = box_m.text_frame
    tf_m.word_wrap = True
    tf_m.margin_left = tf_m.margin_right = tf_m.margin_top = tf_m.margin_bottom = Inches(0.4)

    p = tf_m.paragraphs[0]
    p.text = "⚠️ La Ilusión del Éxito"
    p.font.name = "Arial"
    p.font.size = Pt(20)
    p.font.bold = True
    p.font.color.rgb = c_accent

    p2 = tf_m.add_paragraph()
    p2.text = "Un programa puede ejecutar sus tareas principales (funcionalidad nominal) de manera correcta ante un escenario ideal, pero ser extremadamente frágil ante la realidad de producción."
    p2.font.name = "Arial"
    p2.font.size = Pt(14)
    p2.font.color.rgb = c_gray
    p2.space_before = Pt(14)

    box_r = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(1.8), Inches(5.7), Inches(5.0))
    box_r.fill.solid()
    box_r.fill.fore_color.rgb = c_dark_card
    box_r.line.color.rgb = c_card_border
    tf_r = box_r.text_frame
    tf_r.word_wrap = True
    tf_r.margin_left = tf_r.margin_right = tf_r.margin_top = tf_r.margin_bottom = Inches(0.4)

    p = tf_r.paragraphs[0]
    p.text = "💥 Fallos Ocultos Comunes"
    p.font.name = "Arial"
    p.font.size = Pt(20)
    p.font.bold = True
    p.font.color.rgb = c_cyan

    risks = [
        "• Fugas de memoria: Degeneración progresiva del sistema RAM.",
        "• Código Espagueti: Acoplamiento extremo imposible de mantener.",
        "• Casos Borde (Edge Cases): Colapsos al ingresar datos atípicos o caracteres especiales.",
        "• Escalabilidad nula: Fallos catastróficos bajo condiciones de alto tráfico de usuarios concurrentes."
    ]

    for r in risks:
        pr = tf_r.add_paragraph()
        pr.text = r
        pr.font.name = "Arial"
        pr.font.size = Pt(13)
        pr.font.color.rgb = c_gray
        pr.space_before = Pt(8)

    # ==================== SLIDE 5: PANORÁMICA DE IAS ====================
    slide5 = prs.slides.add_slide(blank_layout)
    add_header(slide5, "4. Herramientas de IA en el Desarrollo", "Comparativa general del ecosistema de asistencia inteligente")

    ias = [
        ("ChatGPT / GPT-4", "OpenAI", "Conversacional / Generativa", "Ideal para explicación de conceptos teóricos y solución de lógica."),
        ("Claude", "Anthropic", "Razonamiento y Contexto", "Excelente análisis de código extenso y revisiones estrictas de seguridad."),
        ("Gemini", "Google", "Multimodal / Cloud", "Soporte para procesamiento de imágenes, diagramas y arquitectura."),
        ("Cursor", "Anysphere", "IDE Completo (Fork VS Code)", "Revolucionario editor impulsado por IA para proyectos completos.")
    ]

    for i, (name, dev, type_ia, use) in enumerate(ias):
        top = Inches(1.8 + i * 1.25)
        b = slide5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), top, Inches(11.7), Inches(1.1))
        b.fill.solid()
        b.fill.fore_color.rgb = c_dark_card
        b.line.color.rgb = c_card_border
        tf = b.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.3)
        tf.margin_top = Inches(0.15)

        p = tf.paragraphs[0]
        p.text = f"{name} ({dev}) — "
        p.font.name = "Arial"
        p.font.size = Pt(15)
        p.font.bold = True
        p.font.color.rgb = c_white

        run = p.add_run()
        run.text = type_ia
        run.font.color.rgb = c_cyan

        p2 = tf.add_paragraph()
        p2.text = use
        p2.font.name = "Arial"
        p2.font.size = Pt(12)
        p2.font.color.rgb = c_gray
        p2.space_before = Pt(2)

    # ==================== SLIDE 6: GITHUB COPILOT DEEP DIVE 1 ====================
    slide6 = prs.slides.add_slide(blank_layout)
    add_header(slide6, "5. GitHub Copilot: Arquitectura y Funcionamiento", "Cómo opera el asistente de IA más popular del mundo")

    box_c6_1 = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(5.6), Inches(5.0))
    box_c6_1.fill.solid()
    box_c6_1.fill.fore_color.rgb = c_dark_card
    box_c6_1.line.color.rgb = c_card_border
    tf6_1 = box_c6_1.text_frame
    tf6_1.word_wrap = True
    tf6_1.margin_left = tf6_1.margin_right = tf6_1.margin_top = tf6_1.margin_bottom = Inches(0.4)

    p = tf6_1.paragraphs[0]
    p.text = "🧠 Motor Tecnológico (OpenAI Codex)"
    p.font.name = "Arial"
    p.font.size = Pt(20)
    p.font.bold = True
    p.font.color.rgb = c_cyan

    p2 = tf6_1.add_paragraph()
    p2.text = "Basado en modelos de lenguaje masivo entrenados con miles de millones de líneas de código público en GitHub. Comprende la semántica de múltiples lenguajes de programación y puede traducir comentarios en texto plano a bloques de código funcionales."
    p2.font.name = "Arial"
    p2.font.size = Pt(13)
    p2.font.color.rgb = c_gray
    p2.space_before = Pt(12)

    box_c6_2 = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(1.8), Inches(5.7), Inches(5.0))
    box_c6_2.fill.solid()
    box_c6_2.fill.fore_color.rgb = c_dark_card
    box_c6_2.line.color.rgb = c_card_border
    tf6_2 = box_c6_2.text_frame
    tf6_2.word_wrap = True
    tf6_2.margin_left = tf6_2.margin_right = tf6_2.margin_top = tf6_2.margin_bottom = Inches(0.4)

    p = tf6_2.paragraphs[0]
    p.text = "⚙️ Contexto y Workspace Awareness"
    p.font.name = "Arial"
    p.font.size = Pt(20)
    p.font.bold = True
    p.font.color.rgb = c_accent

    p3 = tf6_2.add_paragraph()
    p3.text = "Copilot no solo mira la línea actual donde escribes, sino que analiza:\n• Pestañas y archivos abiertos en tu editor.\n• Estructura de importaciones y librerías instaladas.\n• Estándares y nomenclatura de tu proyecto actual para mantener coherencia absoluta."
    p3.font.name = "Arial"
    p3.font.size = Pt(13)
    p3.font.color.rgb = c_gray
    p3.space_before = Pt(12)

    # ==================== SLIDE 7: GITHUB COPILOT DEEP DIVE 2 ====================
    slide7 = prs.slides.add_slide(blank_layout)
    add_header(slide7, "6. GitHub Copilot en el Ciclo de Desarrollo", "Impacto directo en la productividad y calidad del código diario")

    cards_s7 = [
        ("Autocompletado Predictivo", "Sugiere funciones completas, bucles y estructuras de datos mientras escribes el nombre o comentarios descriptivos, reduciendo el tipeo manual en un 55%."),
        ("Generación de Pruebas Unitarias", "Crea rápidamente casos de prueba en PHPUnit, Jest o PyTest basándose en la lógica de las funciones desarrolladas, asegurando mayor cobertura."),
        ("Documentación Automatizada", "Escribe docstrings, comentarios explicativos y documentación técnica en segundos, mejorando la mantenibilidad del equipo.")
    ]

    for i, (title, desc) in enumerate(cards_s7):
        left = Inches(0.8 + i * 4.0)
        c = slide7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(1.8), Inches(3.7), Inches(5.0))
        c.fill.solid()
        c.fill.fore_color.rgb = c_dark_card
        c.line.color.rgb = c_card_border
        tf = c.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = Inches(0.4)

        p = tf.paragraphs[0]
        p.text = title
        p.font.name = "Arial"
        p.font.size = Pt(18)
        p.font.bold = True
        p.font.color.rgb = c_cyan

        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.name = "Arial"
        p2.font.size = Pt(13)
        p2.font.color.rgb = c_gray
        p2.space_before = Pt(14)

    # ==================== SLIDE 8: GITHUB COPILOT RIESGOS Y BUENAS PRÁCTICAS ====================
    slide8 = prs.slides.add_slide(blank_layout)
    add_header(slide8, "7. Seguridad y Criterio Humano con Copilot", "Mitigación de riesgos y buenas prácticas obligatorias")

    box_c8_1 = slide8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(5.6), Inches(5.0))
    box_c8_1.fill.solid()
    box_c8_1.fill.fore_color.rgb = c_dark_card
    box_c8_1.line.color.rgb = c_card_border
    tf8_1 = box_c8_1.text_frame
    tf8_1.word_wrap = True
    tf8_1.margin_left = tf8_1.margin_right = tf8_1.margin_top = tf8_1.margin_bottom = Inches(0.4)

    p = tf8_1.paragraphs[0]
    p.text = "⚠️ Riesgos a Considerar"
    p.font.name = "Arial"
    p.font.size = Pt(20)
    p.font.bold = True
    p.font.color.rgb = RGBColor(248, 113, 113)

    risks_cp = [
        "• Alucinaciones de código: Sugerencias sintácticamente correctas pero lógicamente defectuosas.",
        "• Vulnerabilidades heredadas: El modelo puede replicar patrones inseguros encontrados en repositorios públicos.",
        "• Exceso de confianza: Asumir que el código generado está libre de bugs sin realizar pruebas previas."
    ]

    for rc in risks_cp:
        prc = tf8_1.add_paragraph()
        prc.text = rc
        prc.font.name = "Arial"
        prc.font.size = Pt(13)
        prc.font.color.rgb = c_gray
        prc.space_before = Pt(12)

    box_c8_2 = slide8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(1.8), Inches(5.7), Inches(5.0))
    box_c8_2.fill.solid()
    box_c8_2.fill.fore_color.rgb = c_dark_card
    box_c8_2.line.color.rgb = c_card_border
    tf8_2 = box_c8_2.text_frame
    tf8_2.word_wrap = True
    tf8_2.margin_left = tf8_2.margin_right = tf8_2.margin_top = tf8_2.margin_bottom = Inches(0.4)

    p = tf8_2.paragraphs[0]
    p.text = "🛡️ Buenas Prácticas del Desarrollador"
    p.font.name = "Arial"
    p.font.size = Pt(20)
    p.font.bold = True
    p.font.color.rgb = c_cyan

    practices = [
        "• Validación rigurosa: Leer, auditar y probar cada sugerencia antes de incorporarla al repositorio principal.",
        "• Aprendizaje activo: Entender el funcionamiento del código generado en lugar de solo copiar y pegar.",
        "• Protección de datos: Evitar compartir credenciales, claves API o información confidencial de la empresa con el prompt."
    ]

    for pr in practices:
        ppr = tf8_2.add_paragraph()
        ppr.text = pr
        ppr.font.name = "Arial"
        ppr.font.size = Pt(13)
        ppr.font.color.rgb = c_gray
        ppr.space_before = Pt(12)

    # ==================== SLIDE 9: CONCLUSIÓN ADSO ====================
    slide9 = prs.slides.add_slide(blank_layout)
    add_header(slide9, "8. Conclusión: GitHub Copilot en ADSO", "Los 5 argumentos definitivos para el estudiante SENA")

    box_main9 = slide9.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(11.7), Inches(5.0))
    box_main9.fill.solid()
    box_main9.fill.fore_color.rgb = c_dark_card
    box_main9.line.color.rgb = c_card_border
    tf9 = box_main9.text_frame
    tf9.word_wrap = True
    tf9.margin_left = tf9.margin_right = tf9.margin_top = tf9.margin_bottom = Inches(0.4)

    p = tf9.paragraphs[0]
    p.text = "🎯 ¿Por qué GitHub Copilot es la herramienta ideal para ADSO?"
    p.font.name = "Arial"
    p.font.size = Pt(20)
    p.font.bold = True
    p.font.color.rgb = c_cyan

    args_adso = [
        "1. Integración en VS Code: Se instala en el entorno de desarrollo oficial del programa, evitando cambios constantes de ventana.",
        "2. Costo Cero para Estudiantes: Acceso totalmente gratuito mediante el paquete de estudiante de GitHub (GitHub Student Developer Pack).",
        "3. Compatibilidad Tecnológica: Soporte excelente para los lenguajes y frameworks de la formación (PHP, Laravel, JavaScript, HTML, CSS, SQL).",
        "4. Calidad y Documentación: Facilita la creación rápida de comentarios estructurados y pruebas unitarias para entregas profesionales.",
        "5. Estímulo al Aprendizaje Crítico: Obliga al aprendiz a revisar, probar y validar la sintaxis sugerida, convirtiéndose en un tutor interactivo."
    ]

    for aa in args_adso:
        paa = tf9.add_paragraph()
        paa.text = aa
        paa.font.name = "Arial"
        paa.font.size = Pt(13)
        paa.font.color.rgb = c_gray
        paa.space_before = Pt(10)

    output_path = "C:/Users/Personal/Documents/Default Project/Calidad_Software_GitHub_Copilot_Pro.pptx"
    prs.save(output_path)
    print(f"Presentación PRO guardada en: {output_path}")

if __name__ == "__main__":
    create_presentation_pro()
