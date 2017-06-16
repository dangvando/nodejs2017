function Khoahoc(ten , hocphi)
{
	this.Ten  = ten;
	this.Hocphi = hocphi;
}
Khoahoc.prototype.mota = function(){
	console.log("xin chao " + this.Ten + "Hoc phi :" +this.Hocphi);
}
var nodejs = new Khoahoc("dang van do",10000);
 
nodejs.mota();