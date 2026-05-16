import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Pest Control Services</title>
    <meta name="description" content="Professional pest control services. Complete protection from termites, roaches, rodents, wasps, ants, mosquitoes, and more. Get a free inspection today.">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛡️</text></svg>">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #1B2A4A; }

        .hero { background: linear-gradient(135deg, #2D6A4F, #1B2A4A); color: white; padding: 80px 20px; text-align: center; }
        .hero h1 { font-size: clamp(28px, 5vw, 42px); font-weight: 800; margin-bottom: 20px; }
        .hero p { font-size: 18px; margin-bottom: 30px; opacity: 0.9; max-width: 720px; margin-left: auto; margin-right: auto; }

        .btn { background: #F4A261; color: #1B2A4A; padding: 16px 32px; border-radius: 8px;
               text-decoration: none; font-weight: 700; display: inline-block; transition: transform .15s ease, box-shadow .15s ease; }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,0,0,.2); }

        .contact-section { padding: 60px 20px; max-width: 800px; margin: 0 auto; }
        .contact-section h2 { text-align: center; margin-bottom: 30px; font-size: 28px; }

        .contact-info { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
        .contact-method { margin-bottom: 15px; }
        .contact-method:last-child { margin-bottom: 0; }
        .contact-method a { color: #2D6A4F; font-weight: 700; text-decoration: none; }
        .contact-method a:hover { text-decoration: underline; }

        .form-container { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .form-container h3 { margin-bottom: 8px; }
        .form-container p { margin-bottom: 20px; color: #4a5568; }
    </style>
</head>
<body>
    <section class="hero">
        <h1>Professional Pest Control Services</h1>
        <p>Complete protection for your family and property from termites, roaches, rodents, wasps, ants, mosquitoes, and more.</p>
        <a href="#contact" class="btn">Get Free Inspection Today</a>
    </section>

    <section class="contact-section" id="contact">
        <h2>Contact Us Today</h2>

        <div class="contact-info">
            <div class="contact-method">
                <strong>📞 Call or Text:</strong> <a href="tel:+1XXXXXXXXXX">(XXX) XXX-XXXX</a>
            </div>
            <div class="contact-method">
                <strong>✉️ Email:</strong> <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
            </div>
            <div class="contact-method">
                <strong>📍 Service Area:</strong> [Your City] & Surrounding Areas
            </div>
        </div>

        <div class="form-container">
            <h3>Request Your Free Inspection</h3>
            <p>Fill out the form below and we'll contact you within 2 business hours.</p>

            <!-- GorillaDesk Form Container -->
            <div id="gorilladesk-contact-form"></div>
        </div>
    </section>

    <!-- GorillaDesk Script -->
    <script type="text/javascript">
        var _gorilla = _gorilla || {};
        _gorilla.account_id = '0d73a25092e5c1c9769a9f3255caa65a';
        var _gorillaInitPortal = function () {
            var a = document.createElement('script');
            a.type = 'text/javascript';
            a.async = !0;
            a.defer = !0;
            a.src = 'https://portal-embed-v3.gorilladesk.com/js/contact/contact.js';
            var b = document.getElementsByTagName('script')[0];
            b.parentNode.insertBefore(a, b);
        };
        window.addEventListener ? window.addEventListener('load', _gorillaInitPortal, !1) :
        window.attachEvent ? window.attachEvent('onload', _gorillaInitPortal) : (window.onload = _gorillaInitPortal);
    </script>
</body>
</html>`)
})

export default app
