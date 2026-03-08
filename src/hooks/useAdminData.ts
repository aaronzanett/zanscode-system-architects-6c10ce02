import { useState, useEffect } from 'react';
import type { 
  Partner, 
  Service, 
  AboutContent, 
  SaaSProduct, 
  ContactInfo, 
  ConsultationRequest,
  TeamMember 
} from '@/types/admin';

const STORAGE_KEYS = {
  partners: 'admin_partners',
  services: 'admin_services',
  about: 'admin_about',
  saas: 'admin_saas',
  contactInfo: 'admin_contact_info',
  consultations: 'admin_consultations',
  team: 'admin_team',
};

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export function usePartners() {
  return useLocalStorage<Partner[]>(STORAGE_KEYS.partners, []);
}

export function useServices() {
  return useLocalStorage<Service[]>(STORAGE_KEYS.services, []);
}

export function useAboutContent() {
  return useLocalStorage<AboutContent | null>(STORAGE_KEYS.about, null);
}

export function useSaaSProducts() {
  return useLocalStorage<SaaSProduct[]>(STORAGE_KEYS.saas, []);
}

export function useContactInfo() {
  return useLocalStorage<ContactInfo | null>(STORAGE_KEYS.contactInfo, null);
}

export function useConsultations() {
  return useLocalStorage<ConsultationRequest[]>(STORAGE_KEYS.consultations, []);
}

export function useTeamMembers() {
  return useLocalStorage<TeamMember[]>(STORAGE_KEYS.team, []);
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
