using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistance.Data.Migrations
{
    public partial class mp3Url : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Mp3Url",
                table: "Alarm",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Mp3Url",
                table: "Alarm");
        }
    }
}
