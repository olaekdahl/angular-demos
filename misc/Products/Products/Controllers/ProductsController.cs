using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Products.DAL;
using Products.Models;

namespace Products.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private AcmeDbContext _ctx;
        public ProductsController(AcmeDbContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            return _ctx.Products.ToList();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] int id)
        {
            var prod = _ctx.Products.Find(id);
            _ctx.Products.Remove(prod);
            _ctx.SaveChanges();
            return Ok();
        }

        [HttpPost]
        public Product Post([FromBody] Product product)
        {
            _ctx.Products.Add(product);
            _ctx.SaveChanges();
            return product;
        }
    }
}
