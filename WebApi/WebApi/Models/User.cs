﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class User
    {
        [Key]
        public int id { get; set; }
        public string email { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string password { get; set; }
        public string avatar { get; set; }
     /*   public virtual ICollection<CuocHoiThoai> CuocHoiThoais { get; set; }
        public virtual ICollection<NguoiThamGia> NguoiThamGias { get; set; }
        public virtual ICollection<TinNhan> TinNhans { get; set; }*/
    }
}
