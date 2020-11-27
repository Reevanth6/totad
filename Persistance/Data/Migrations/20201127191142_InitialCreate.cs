using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistance.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Alarm",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DeviceName = table.Column<string>(nullable: true),
                    Language = table.Column<string>(nullable: true),
                    Daily = table.Column<bool>(nullable: false),
                    Enable = table.Column<bool>(nullable: false),
                    Date = table.Column<string>(nullable: true),
                    Time = table.Column<string>(nullable: true),
                    Text = table.Column<string>(nullable: true),
                    Repetition = table.Column<int>(nullable: false),
                    Volume = table.Column<int>(nullable: false),
                    URL = table.Column<string>(nullable: true),
                    Count = table.Column<int>(nullable: false),
                    Announcement = table.Column<bool>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    IP = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alarm", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    EmailAddress = table.Column<string>(nullable: true),
                    EmployeeID = table.Column<int>(nullable: false),
                    Password = table.Column<string>(nullable: true),
                    Location = table.Column<string>(nullable: true),
                    Phone = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Alarm");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
