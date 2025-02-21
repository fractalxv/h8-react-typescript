import { useState, useRef, useEffect } from 'react';
import { z } from 'zod';
import Input from './components/UI/Input';
import Button from './components/UI/Button';
import Label from './components/UI/Label';
import useAuth from './components/hooks/useAuth';

const schema = z.object({
  fullName: z.string().min(3, 'Nama lengkap harus minimal 3 karakter'),
  email: z.string().email('Email harus valid'),
  password: z.string().min(6, 'Password harus minimal 6 karakter'),
  confirmPassword: z.string(),
  age: z.string().refine(val => {
    if (!val) return true; 
    const num = parseInt(val);
    return !isNaN(num) && num >= 18;
  }, 'Umur harus minimal 18 tahun')

}).refine((data) => data.password === data.confirmPassword, {
  message: "Konfirmasi password harus sama",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof schema>;

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const { error: authError, regist } = useAuth();

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleChange = (field: keyof FormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const result = schema.safeParse(formData);

    if (!result.success) {
      const formattedErrors = Object.fromEntries(
        Object.entries(result.error.flatten().fieldErrors).map(([key, value]) => [
          key,
          value?.[0] || ''
        ])
      );
      setErrors(formattedErrors);
      return;
    }

    setErrors({});
    regist(formData.email, formData.password, formData.fullName, formData.confirmPassword, formData.age);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 w-[400px] rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
        
        {authError && (
          <div className="bg-red-50 text-red-400 px-4 py-2 mb-4 rounded-lg">
            {authError}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <Label htmlFor="fullName">Nama Lengkap</Label>
            <Input
              ref={nameRef}
              id="fullName"
              value={formData.fullName}
              onChange={handleChange('fullName')}
              error={errors.fullName}
              placeholder="Masukkan nama lengkap"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              error={errors.email}
              placeholder="Masukkan email"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange('password')}
              error={errors.password}
              placeholder="Masukkan password"
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange('confirmPassword')}
              error={errors.confirmPassword}
              placeholder="Konfirmasi password"
            />
          </div>

          <div>
            <Label htmlFor="age">Umur (Opsional)</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={handleChange('age')}
              error={errors.age}
              placeholder="Masukkan umur"
            />
          </div>
        </div>

        <div className="mt-6">
          <Button label="Register" className="w-full" />
        </div>
      </form>
    </div>
  );
}