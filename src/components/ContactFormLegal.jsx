import { useState } from 'react';

// Icon component to prevent hydration mismatch
const Icon = ({ name, className = "w-4 h-4" }) => {
  const icons = {
    'check-lg': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>,
    'exclamation-circle': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>,
    'whatsapp': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>,
    'telephone': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>,
    'envelope': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>,
    'send': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/></svg>,
    'user': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/></svg>,
    'message-square': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12ZM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z"/></svg>,
    'file-text': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/><path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/></svg>,
    'alert-circle': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
  };
  
  return icons[name] || null;
};

// ContactFormLegal - Specialized form for legal inquiries
export default function ContactFormLegal({ 
  email = 'jhonbeck860@gmail.com',
  whatsappNumber = '+51997307782'
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    queryType: 'aviso-legal',
    message: '',
    preferredContact: 'email'
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMethod, setSubmitMethod] = useState(null);

  // Query types for legal matters
  const queryTypes = [
    { value: 'aviso-legal', label: 'Aviso Legal' },
    { value: 'privacidad', label: 'Política de Privacidad' },
    { value: 'terminos', label: 'Términos de Uso' },
    { value: 'otros', label: 'Otro asunto legal' }
  ];

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
      
      case 'queryType':
        if (!value.trim()) return 'Seleccione un tipo de consulta';
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

  const buildWhatsAppMessage = () => {
    const queryLabel = queryTypes.find(q => q.value === formData.queryType)?.label || 'Otro';
    return `*Consulta Legal - Clínica Pediátrica*%0A%0A` +
           `*Tipo de consulta:* ${queryLabel}%0A%0A` +
           `*Nombre:* ${formData.name}%0A` +
           `*Email:* ${formData.email}%0A` +
           `*Teléfono:* ${formData.phone}%0A` +
           `*Método de contacto preferido:* ${formData.preferredContact.toUpperCase()}%0A%0A` +
           `*Mensaje:*%0A${formData.message}%0A%0A` +
           `---%0AEnviado desde el formulario de contacto legal`;
  };

  const buildMailtoLink = () => {
    const queryLabel = queryTypes.find(q => q.value === formData.queryType)?.label || 'Otro';
    const subject = encodeURIComponent(`Consulta Legal: ${queryLabel}`);
    const body = encodeURIComponent(
      `Tipo de consulta: ${queryLabel}\n\n` +
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Método de contacto preferido: ${formData.preferredContact.toUpperCase()}\n\n` +
      `Mensaje:\n${formData.message}\n\n` +
      `---\nEnviado desde el formulario de contacto legal`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
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
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${buildWhatsAppMessage()}`;
        window.open(whatsappUrl, '_blank');
        setSubmitMethod('whatsapp');
      } else if (formData.preferredContact === 'email') {
        window.location.href = buildMailtoLink();
        setSubmitMethod('email');
      } else {
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
          queryType: 'aviso-legal',
          message: '',
          preferredContact: 'email'
        });
        setTouched({});
        setSubmitStatus(null);
        setSubmitMethod(null);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
          <Icon name="check-lg" className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-green-800">¡Consulta enviada exitosamente!</p>
            <p className="text-sm text-green-700 mt-1">
              {submitMethod === 'whatsapp' 
                ? 'Serás redirigido a WhatsApp para completar el envío.'
                : submitMethod === 'email'
                ? 'Se abrirá tu cliente de correo para enviar el mensaje.'
                : 'Nos pondremos en contacto contigo pronto.'}
            </p>
          </div>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Nombre completo <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="user" className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ingresa tu nombre completo"
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#5086c1] focus:border-transparent transition-all ${
              errors.name && touched.name
                ? 'border-red-400 bg-red-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          />
        </div>
        {errors.name && touched.name && (
          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
            <Icon name="exclamation-circle" className="w-4 h-4" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email and Phone Row */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="envelope" className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="tu@email.com"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#5086c1] focus:border-transparent transition-all ${
                errors.email && touched.email
                  ? 'border-red-400 bg-red-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            />
          </div>
          {errors.email && touched.email && (
            <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
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
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="telephone" className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+51 999 999 999"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#5086c1] focus:border-transparent transition-all ${
                errors.phone && touched.phone
                  ? 'border-red-400 bg-red-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            />
          </div>
          {errors.phone && touched.phone && (
            <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
              <Icon name="exclamation-circle" className="w-4 h-4" />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Query Type Field */}
      <div>
        <label htmlFor="queryType" className="block text-sm font-semibold text-gray-700 mb-2">
          Tipo de consulta <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="file-text" className="w-5 h-5 text-gray-400" />
          </div>
          <select
            id="queryType"
            name="queryType"
            value={formData.queryType}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#5086c1] focus:border-transparent transition-all appearance-none ${
              errors.queryType && touched.queryType
                ? 'border-red-400 bg-red-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 0.75rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em'
            }}
          >
            {queryTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        {errors.queryType && touched.queryType && (
          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
            <Icon name="exclamation-circle" className="w-4 h-4" />
            {errors.queryType}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <Icon name="message-square" className="w-5 h-5 text-gray-400" />
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Describe tu consulta legal en detalle (mínimo 20 caracteres)..."
            rows={5}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#5086c1] focus:border-transparent transition-all resize-none ${
              errors.message && touched.message
                ? 'border-red-400 bg-red-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          />
        </div>
        <div className="flex justify-between mt-2">
          {errors.message && touched.message && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <Icon name="exclamation-circle" className="w-4 h-4" />
              {errors.message}
            </p>
          )}
          <p className={`text-sm ml-auto ${formData.message.length > 1000 ? 'text-red-500' : 'text-gray-400'}`}>
            {formData.message.length}/1000 caracteres
          </p>
        </div>
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Método de contacto preferido
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label
            className={`flex items-center justify-center gap-2 p-3 border rounded-lg cursor-pointer transition-all ${
              formData.preferredContact === 'email'
                ? 'border-[#5086c1] bg-[#5086c1]/5 text-[#5086c1]'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <input
              type="radio"
              name="preferredContact"
              value="email"
              checked={formData.preferredContact === 'email'}
              onChange={handleChange}
              className="sr-only"
            />
            <Icon name="envelope" className="w-5 h-5" />
            <span className="font-medium">Email</span>
          </label>
          <label
            className={`flex items-center justify-center gap-2 p-3 border rounded-lg cursor-pointer transition-all ${
              formData.preferredContact === 'whatsapp'
                ? 'border-[#5086c1] bg-[#5086c1]/5 text-[#5086c1]'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <input
              type="radio"
              name="preferredContact"
              value="whatsapp"
              checked={formData.preferredContact === 'whatsapp'}
              onChange={handleChange}
              className="sr-only"
            />
            <Icon name="whatsapp" className="w-5 h-5" />
            <span className="font-medium">WhatsApp</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg font-semibold text-white transition-all ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#5086c1] hover:bg-[#3d6a9a] shadow-lg hover:shadow-xl'
        }`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <Icon name="send" className="w-5 h-5" />
            <span>Enviar consulta legal</span>
          </>
        )}
      </button>

      {/* Privacy Notice */}
      <p className="text-xs text-gray-500 text-center">
        Al enviar este formulario, aceptas que tus datos sean utilizados exclusivamente para responder a tu consulta legal.
        Consulta nuestra <a href="/legales/privacidad" className="text-[#5086c1] hover:underline">Política de Privacidad</a> para más información.
      </p>
    </form>
  );
}

