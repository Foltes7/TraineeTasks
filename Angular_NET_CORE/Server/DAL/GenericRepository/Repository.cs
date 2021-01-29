﻿using Common.DB_MODELS;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DAL.GenericRepository
{
    public class Repository<T> : IRepository<T> where T : BaseEntity
    {
        protected readonly AppContextDatabase context;
        private DbSet<T> entities;
        public Repository(AppContextDatabase context)
        {
            this.context = context;
            entities = context.Set<T>();
        }

        public async Task<T> GetById(int id) => await entities.FirstOrDefaultAsync(z => z.Id == id);

        public async Task<T> FirstOrDefault(Expression<Func<T, bool>> predicate)
            => await entities.FirstOrDefaultAsync(predicate);

        public async Task Add(T entity)
        {
            await entities.AddAsync(entity);
            await context.SaveChangesAsync();
        }

        public async Task Update(T entity)
        {
            entities.Update(entity);
            await context.SaveChangesAsync();
        }

        public async Task Remove(T entity)
        {
            entities.Remove(entity);
            await context.SaveChangesAsync();
        }

        public virtual async Task<IEnumerable<T>> GetAll()
        {
            return await entities.ToListAsync();
        }

        public async Task<IEnumerable<T>> GetWhere(Expression<Func<T, bool>> predicate)
        {
            return await entities.Where(predicate).ToListAsync();
        }
    }
}
