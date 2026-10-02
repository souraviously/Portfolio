import React, { useEffect, useState } from 'react';
import { FiRefreshCw, FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { contactServices } from '../api';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const loadMessages = async (nextPage = 1, append = false) => {
    setLoading(true);
    try {
      const res = await contactServices.getContacts({ page: nextPage, limit: 6 });
      const incoming = res?.data?.contacts || [];
      setMessages((prev) => (append ? [...prev, ...incoming] : incoming));
      setHasMore(res?.data?.hasMore || false);
      setPage(nextPage);
    } catch (error) {
      toast.error(error.message || 'Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages(1, false);
  }, []);

  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      await contactServices.deleteContact(id);
      toast.success('Message deleted successfully');
      setMessages((prev) => prev.filter((message) => message._id !== id));
    } catch (error) {
      toast.error(error.message || 'Failed to delete message');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">Messages</p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">Admin Messages</h1>
        </div>
        <button
          type="button"
          onClick={() => loadMessages(1, false)}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 disabled:opacity-60"
        >
          <FiRefreshCw className={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      {loading && !messages.length ? (
        <div className="grid min-h-48 place-items-center rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-red-500" />
        </div>
      ) : messages.length ? (
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message._id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold text-slate-900">{message.name}</h2>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
                      {message.subject}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{message.email}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-700">{message.message}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(message._id)}
                  disabled={deletingId === message._id}
                  className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-60"
                >
                  <FiTrash2 />
                  {deletingId === message._id ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          ))}

          {hasMore && (
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => loadMessages(page + 1, true)}
                disabled={loading}
                className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Loading...' : 'Load more'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500 shadow-sm">
          No messages found.
        </div>
      )}
    </div>
  );
};

export default AdminMessages;