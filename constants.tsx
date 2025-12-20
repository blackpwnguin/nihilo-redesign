
import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Custom AI Engineering',
    description: 'Specialized LLM orchestration, RAG architectures, and fine-tuned proprietary models for enterprise data compliance.',
    icon: 'Brain'
  },
  {
    id: '2',
    title: 'Workflow Automation',
    description: 'Transforming legacy operations into high-efficiency automated pipelines using serverless and event-driven architectures.',
    icon: 'Zap'
  },
  {
    id: '3',
    title: 'Cloud Infrastructure',
    description: 'Architecting resilient, multi-region environments on AWS and Azure with focus on security and cost optimization.',
    icon: 'Cloud'
  },
  {
    id: '4',
    title: 'Data Orchestration',
    description: 'Building robust ETL pipelines and real-time streaming architectures to fuel advanced intelligence layers.',
    icon: 'Database'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'OmniStream AI',
    category: 'AWS / Serverless',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Azure Fabric Automate',
    category: 'Azure / Enterprise',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Cognitive Pipeline',
    category: 'LLM / MLOps',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Cloud-Native ERP',
    category: 'Cloud Architecture',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop'
  }
];

export const PERFORMANCE_DATA = [
  { name: 'W1', efficiency: 42, latency: 120 },
  { name: 'W2', efficiency: 58, latency: 110 },
  { name: 'W3', efficiency: 72, latency: 85 },
  { name: 'W4', efficiency: 89, latency: 60 },
  { name: 'W5', efficiency: 94, latency: 42 },
  { name: 'W6', efficiency: 98, latency: 38 },
];
