'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Upload, X, CheckCircle, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Initialize Supabase client (Replace with your environment variables)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

interface UploadComponentProps {
  bucketName: string;
  onUploadComplete: (url: string) => void;
  className?: string;
}

export default function UploadComponent({ bucketName, onUploadComplete, className }: UploadComponentProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setError(null);
      setProgress(0);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError, data } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file, {
          upsert: false,
        });

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from(bucketName)
        .getPublicUrl(filePath);

      onUploadComplete(publicUrl);
      setFile(null); // Reset after success
      
    } catch (err: any) {
      setError(err.message || 'Error uploading file');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={twMerge("p-4 border border-slate-700 bg-slate-800/50 rounded-lg", className)}>
      <div className="flex flex-col gap-4">
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-600 border-dashed rounded-lg cursor-pointer bg-slate-900/50 hover:bg-slate-800 hover:border-emerald-500 transition-colors group">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-8 h-8 mb-3 text-slate-400 group-hover:text-emerald-500" />
            <p className="text-sm text-slate-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-slate-500">SVG, PNG, JPG, PDF</p>
          </div>
          <input type="file" className="hidden" onChange={handleFileChange} disabled={uploading} />
        </label>

        {file && (
            <div className="flex items-center justify-between p-3 bg-slate-800 rounded border border-slate-700">
                <div className="flex items-center truncate">
                    <span className="text-sm text-slate-200 truncate max-w-[200px]">{file.name}</span>
                    <span className="text-xs text-slate-500 ml-2">({(file.size / 1024).toFixed(1)} KB)</span>
                </div>
                <button onClick={() => setFile(null)} disabled={uploading} className="text-slate-400 hover:text-red-400">
                    <X className="w-4 h-4" />
                </button>
            </div>
        )}

        {error && (
            <div className="flex items-center text-red-400 text-sm gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
            </div>
        )}

        {file && !uploading && !error && (
            <button
                onClick={handleUpload}
                className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-sm rounded transition-colors flex items-center justify-center gap-2"
            >
                <Upload className="w-4 h-4" />
                INITIATE UPLOAD
            </button>
        )}

        {uploading && (
            <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div className="bg-emerald-500 h-2.5 rounded-full animate-pulse" style={{ width: '100%' }}></div>
            </div>
        )}
      </div>
    </div>
  );
}
