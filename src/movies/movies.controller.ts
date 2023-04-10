import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/Create-Movie.Dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService:MoviesService){

    }

    @Get()
    getAll() : Movie[] {
        return this.moviesService.getAll();
        //return 'This will return all movies';
    }
    // @Get('search')
    // search(@Query('year') searchingYear:string ){
    //     return `Wer are searching for a movie made after: ${searchingYear}`
    // }


    @Get(':id')
    getOne(@Param('id') movieId: number) : Movie {
        return this.moviesService.getOne(movieId) ;
    }

    @Post()
    create(@Body() movieData :CreateMovieDto){
        //console.log(movieData);
        return this.moviesService.create(movieData);

    }

    @Delete(':id')
    remove(@Param('id') movieId: number){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieId : number, @Body() updateData){
        return this.moviesService.update(movieId, updateData);
    }

    // @Put()
    // update(){
    //     return 
    // }

   
}
