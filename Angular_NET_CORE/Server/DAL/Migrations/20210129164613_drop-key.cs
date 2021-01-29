using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class dropkey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "productSizes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "productSizes",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
