using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4)]
        public string Password { get; set; }
    }
}

/*
data transfer object
A data transfer object (DTO) is an object that carries data between processes. 
You can use this technique to facilitate communication between two systems (like an API and your server) 
without potentially exposing sensitive information. DTOs are commonsense solutions for people with 
programming backgrounds.
*/
