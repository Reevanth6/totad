using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var conString = Configuration.GetConnectionString("core_connection");
            services.AddDbContext<CoreDBContext>(opt =>
            {
                // opt.UseLazyLoadingProxies().UseSqlServer(conString);
                opt.UseSqlite(conString);
            });
            services.AddSwaggerGen(c => {
                c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "API", Version = "v1"});
                // var securitySchema = new OpenApiSecurityScheme{
                //     Description = "JWT Auth Bearer Schema",
                //     Name = "Authorization",
                //     In = ParameterLocation.Header,
                //     Type = SecuritySchemeType.Http,
                //     Scheme = "bearer",
                //     Reference = new OpenApiReference
                //     {
                //         Type = ReferenceType.SecurityScheme,
                //         Id = "Bearer"
                //     };
                //     c.AddSecurityDefinition("Bearer", securitySchema);
                //     var securityRequirement = new OpenApiSecurityRequirement{ { securitySchema, new[] {'Bearer'}}};
                //     c.AddSecurityRequirement(securityRequirement);
                //     c.ResolveConflictAction(desc => desc.First());
                // }
                // // c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme {
                // //     In = ParameterLocation.Header, 
                // //     Description = "Please insert JWT with Bearer into field",
                // //     Name = "Authorization",
                // //     Type = SecuritySchemeType.ApiKey 
                // // });
                // // c.AddSecurityRequirement(new OpenApiSecurityRequirement {
                // // { 
                // //     new OpenApiSecurityScheme 
                // //     { 
                // //     Reference = new OpenApiReference 
                // //     { 
                // //         Type = ReferenceType.SecurityScheme,
                // //         Id = "Bearer" 
                // //     } 
                // //     },
                // //     new string[] { } 
                // //     } 
                // // });
            });

            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                    {
                        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200");
                    });
            });
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseHttpsRedirection();
            app.UseRouting();

            app.UseAuthorization();
            
            app.UseCors("CorsPolicy");

            app.UseSwagger();
            app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json","API v1"); });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
