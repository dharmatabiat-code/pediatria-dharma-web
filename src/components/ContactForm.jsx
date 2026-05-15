import { useState, useEffect } from 'react';

// Icon component to prevent hydration mismatch
const Icon = ({ name, className = "w-4 h-4" }) => {
  const icons = {
    'check-lg': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>,
    'exclamation-circle': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>,
    'whatsapp': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>,
    'telephone': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>,
    'envelope': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>,
    'send': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/></svg>
  };
  
  return icons[name] || null;
};

// ContactForm - React component with real-time validation and WhatsApp/Email submission
export default function ContactForm({ 
  email = 'jhonbeck860@gmail.com',
  whatsappNumber = '+51997307782'
}) {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'whatsapp'
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMethod, setSubmitMethod] = useState(null);

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'El nombre es requerido';
        if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) return 'El nombre solo debe contener letras';
        return '';
      
      case 'email':
        if (!value.trim()) return 'El email es requerido';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Ingresa un email válido';
        return '';
      
      case 'phone':
        if (!value.trim()) return 'El teléfono es requerido';
        if (!/^[0-9\s\-\+\(\)]+$/.test(value)) return 'Ingresa un teléfono válido';
        if (value.replace(/\D/g, '').length < 8) return 'El teléfono debe tener al menos 8 dígitos';
        return '';
      
      case 'subject':
        if (!value.trim()) return 'El asunto es requerido';
        if (value.trim().length < 5) return 'El asunto debe tener al menos 5 caracteres';
        return '';
      
      case 'message':
        if (!value.trim()) return 'El mensaje es requerido';
        if (value.trim().length < 20) return 'El mensaje debe tener al menos 20 caracteres';
        if (value.trim().length > 1000) return 'El mensaje no puede exceder 1000 caracteres';
        return '';
      
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'preferredContact') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation if field was touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const sanitizeWhatsAppNumber = (number) => String(number).replace(/\D/g, '');

  const buildWhatsAppMessage = () => {
    const message = `Hola, estoy enviando este mensaje desde el formulario de contacto web.\n\n` +
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Asunto: ${formData.subject}\n` +
      `Método de contacto preferido: ${formData.preferredContact.toUpperCase()}\n\n` +
      `Mensaje:\n${formData.message}\n\n` +
      `---\nEnviado desde el formulario de contacto web`;

    return encodeURIComponent(message);
  };

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(`Contacto Web: ${formData.subject}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Método de contacto preferido: ${formData.preferredContact.toUpperCase()}\n\n` +
      `Mensaje:\n${formData.message}\n\n` +
      `---\nEnviado desde el formulario de contacto web`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const buildGmailLink = () => {
    const subject = encodeURIComponent(`Contacto Web: ${formData.subject}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Método de contacto preferido: ${formData.preferredContact.toUpperCase()}\n\n` +
      `Mensaje:\n${formData.message}\n\n` +
      `---\nEnviado desde el formulario de contacto web`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${subject}&body=${body}`;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouched(allTouched);
    
    const formErrors = validateForm();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call delay for UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Determine submission method based on preferred contact
      if (formData.preferredContact === 'whatsapp') {
        // Open WhatsApp with pre-filled message
        const whatsappUrl = `https://wa.me/${sanitizeWhatsAppNumber(whatsappNumber)}?text=${buildWhatsAppMessage()}`;
        window.open(whatsappUrl, '_blank');
        setSubmitMethod('whatsapp');

      } else if (formData.preferredContact === 'email') {
        // Open Gmail compose as fallback; mailto may not open if no mail client is configured
        window.open(buildGmailLink(), '_blank');
        setSubmitMethod('email');
      } else {
        // For phone preference, show success and let them know we'll call
        setSubmitMethod('phone');
      }
      
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          preferredContact: 'whatsapp'
        });
        setTouched({});
        setSubmitStatus(null);
        setSubmitMethod(null);
      }, 5000);
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClass = "w-full px-4 py-3 rounded-lg border border-gray-200 transition-colors focus:outline-none focus:border-pink-300 focus:ring-1 focus:ring-pink-100";
    
    if (touched[fieldName] && errors[fieldName]) {
      return `${baseClass} border-red-300 bg-white text-red-800 placeholder-red-400`;
    }
    
    if (touched[fieldName] && !errors[fieldName]) {
      return `${baseClass} border-green-300 bg-white text-green-800`;
    }
    
    return `${baseClass} border-gray-200 bg-white text-gray-900 placeholder-gray-400`;
  };

  const messageLength = formData.message.length;
  const messageProgress = Math.min((messageLength / 1000) * 100, 100);

  const getSuccessMessage = () => {


    switch (submitMethod) {
      case 'whatsapp':
        return 'Se abrió WhatsApp con tu mensaje. ¡Envíalo para completar el contacto!';
      case 'email':
        return 'Se abrió tu cliente de correo. ¡Envía el email para completar el contacto!';
      case 'phone':
        return '¡Mensaje recibido! Te llamaremos pronto al número proporcionado.';
      default:
        return '¡Mensaje enviado! Te contactaremos pronto.';
    }
  };

  return (
    

    <div className="bg-white p-1 md:p-2">
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50/70 border border-green-200 rounded-xl flex items-start gap-3 animate-fade-in">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
            <Icon name="check-lg" className="w-6 h-6 text-green-600" />
          </div>

          <div>
            <p className="font-semibold text-green-700">¡Mensaje preparado!</p>
            <p className="text-sm text-green-600">{getSuccessMessage()}</p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ej: María González"
            className={getInputClassName('name')}
            disabled={isSubmitting}
          />
          {touched.name && errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <Icon name="exclamation-circle" className="w-4 h-4" />
              {errors.name}
            </p>
          )}

        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ej: maria@email.com"
            className={getInputClassName('email')}
            disabled={isSubmitting}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <Icon name="exclamation-circle" className="w-4 h-4" />
              {errors.email}
            </p>
          )}

        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ej: +51 999 888 777"
            className={getInputClassName('phone')}
            disabled={isSubmitting}
          />
          {touched.phone && errors.phone && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <Icon name="exclamation-circle" className="w-4 h-4" />
              {errors.phone}
            </p>
          )}

        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            Asunto <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ej: Consulta sobre vacunación"
            className={getInputClassName('subject')}
            disabled={isSubmitting}
          />
          {touched.subject && errors.subject && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <Icon name="exclamation-circle" className="w-4 h-4" />
              {errors.subject}
            </p>
          )}

        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            ¿Cómo prefieres que te contactemos?
          </label>
          <div className="flex gap-2">
            {[
              { value: 'whatsapp', label: 'WhatsApp', icon: 'whatsapp' },
              { value: 'phone', label: 'Llamada', icon: 'telephone' },
              { value: 'email', label: 'Email', icon: 'envelope' }
            ].map(option => (

              <button
                key={option.value}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, preferredContact: option.value }))}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
                  formData.preferredContact === option.value
                    ? 'border-pink-300 bg-pink-50 text-pink-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                }`}
                disabled={isSubmitting}
              >
                <Icon name={option.icon} className="w-4 h-4" />

                <span className="text-sm">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Describe tu consulta o mensaje detalladamente..."
            rows={5}
            className={`${getInputClassName('message')} resize-none`}
            disabled={isSubmitting}
            maxLength={1000}
          />
          <div className="flex items-center justify-between mt-2">
            {touched.message && errors.message ? (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <Icon name="exclamation-circle" className="w-4 h-4" />
                {errors.message}
              </p>
            ) : (

              <span className="text-sm text-gray-400">
                Mínimo 20 caracteres
              </span>
            )}
            <span className={`text-sm ${
              messageLength > 900 ? 'text-amber-500' : 'text-gray-400'
            }`}>
              {messageLength}/1000
            </span>
          </div>
          {/* Progress bar */}
          <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${
                messageLength < 20 ? 'bg-red-300' : 
                messageLength < 100 ? 'bg-yellow-300' : 'bg-green-300'
              }`}
              style={{ width: `${messageProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
            isSubmitting 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-pink-500 text-white hover:bg-pink-600'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Enviando...
            </>
          ) : (
            <>
              <Icon name="send" className="w-4 h-4" />
              {formData.preferredContact === 'whatsapp' ? 'Enviar por WhatsApp' : 
               formData.preferredContact === 'email' ? 'Enviar por Email' : 'Solicitar llamada'}
            </>
          )}
        </button>
        
        {/* Helper text */}
        <p className="text-xs text-gray-400 text-center">
          {formData.preferredContact === 'whatsapp' && 'Se abrirá WhatsApp con tu mensaje pre-escrito'}
          {formData.preferredContact === 'email' && 'Se abrirá Gmail para que completes el correo y lo envíes'}
          {formData.preferredContact === 'phone' && 'Te llamaremos al número proporcionado'}
        </p>
      </form>
    </div>
  );
}
